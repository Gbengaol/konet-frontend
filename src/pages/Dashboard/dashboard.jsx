import React, { Fragment, useState, useEffect, createContext } from 'react';
import HeaderComponent from '../../components/HeaderComponent/headerComponent';
import DashboardLeftPanel from '../../components/DashboardLeftPanel/dashboardLeftPanel';
import DashboardRightPanel from '../../components/DashboardRightPanel/dashboardRightPanel';
import DashboardCenterPanel from '../../components/DashboardCenterPanel/dashboardCenterPanel';
import axios from 'axios'
import { fetchProfileInfo, fetchPostsUrl } from '../../utils/urls';
import { showAlert } from '../../components/alerts/alert'
import { useHistory } from 'react-router-dom';
import { sharePostUrl } from '../../utils/urls';

export const DashboardContext = createContext()

export default function Dashboard() {
    const [state, setState] = useState({
        profileInfo: {},
        fetchingData: false,
        posts: [],
    })
    const [postState, setPostState] = useState({
        newPost: '',
        sendingPost: false,
        sentPost: false
    })
    const history = useHistory();
    let userDetails = localStorage.getItem('userDetails');
    useEffect(() => {
        if(!userDetails){
            return history.push('/login')
        }
        let { authToken, id } = JSON.parse(userDetails);
        async function fetchData() {
            axios.all([
                axios.get(`${fetchProfileInfo}/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    // timeout: FetchTimeOut
                  }),
                axios.get(`${fetchPostsUrl}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    // timeout: FetchTimeOut
                    })
                ])
                .then(axios.spread((profileData, postData) => {
                    if(profileData.data.status === 'success' && postData.data.status === 'success' ){
                        const { photo, role, firstName, lastName, email, bio } = profileData.data.data.data;
                        const posts = postData.data.data.data;
                        setState(state => ({
                            ...state,
                            fetchingData: false,
                            profileInfo: {
                                photo, 
                                role, 
                                firstName,
                                lastName, 
                                email,
                                bio
                            },
                            posts
                        }))
                    }               
                }))
                .catch(error => {
                    setState(state => ({
                        ...state,
                        fetchingData: false
                    }))
                showAlert('danger', error.response.data.message)
            });            
        }
        fetchData();
    }, [postState.sentPost])
    const sharePost = async (e) => {
        let { authToken } = JSON.parse(userDetails);
        e.preventDefault()
        const { newPost } = postState;
        let reqBody = {
            caption: newPost    
        }
        
        try{
            setPostState({
                ...postState,
                sendingPost: true
            })

            const res = await axios({
                method: 'POST',
                url: sharePostUrl,
                data: reqBody,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            })
            if(res.data.status === 'success'){
                setPostState({
                    ...postState,
                    sendingPost: false,
                    newPost: '',
                    sentPost: true
                })
                showAlert('success', 'Post Successful')
            }
        } catch(err) {
            setPostState({
                ...postState,
                sendingPost: false
            })
            showAlert('danger', err.response.data.message)
        }
    }
    const onChange = (e) => {
        setPostState({
            ...postState,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Fragment>
            <DashboardContext.Provider
                value={{
                    posts: state.posts,
                    profileInfo: state.profileInfo,
                    fetchingData: state.fetchingData,
                    sharePost,
                    onChange,
                    postState
                }}
            >
                <div>
                    <HeaderComponent />
                </div>
                <main>
                    <div className="main-wrapper pt-80">
                        <div className="container">
                            <div className="row">
                                <DashboardLeftPanel />
                                <DashboardCenterPanel />
                                <DashboardRightPanel />
                            </div>
                        </div>
                    </div>
                </main>
            </DashboardContext.Provider>
        </Fragment>
    )
}
