function showToast(type) {
    const toastBox = document.getElementById('toastBox');
    let message;

    switch (type) {
        case 'success':
            message = "Operation completed successfully!";
            break;
        case 'error':
            message = "An error occurred. Please try again.";
            break;
        case 'invalid':
            message = "Invalid input. Please check and try again.";
            break; 
        default:
            message = "Unknown message type.";
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;

    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        setTimeout(() => {
            toastBox.removeChild(toast);
        }, 500); // Duration to wait before removing the toast
    }, 3000); // Duration to show the toast
}
