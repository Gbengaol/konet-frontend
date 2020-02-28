
export const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
  
// type is 'success' or 'error' or 'warning'
export const showAlert = (type, msg, time = 5) => {
    hideAlert();
    const markup = `
        <div class="alert alert-${type} alert-dismissible fade show text-center" role="alert">
            <strong>${msg}</strong>
            <button type="button" class="close" data-dismiss="alert" id="close-alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);

    const closeAlert = document.getElementById("close-alert");
    if(closeAlert){
        closeAlert.addEventListener('click', () => {
            hideAlert();
        })
    }
};