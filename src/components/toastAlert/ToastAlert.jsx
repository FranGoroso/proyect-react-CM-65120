import Swal from 'sweetalert2';

const ToastAlert = (message) => {
  Swal.fire({
    toast: true,
    position: 'top-start',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

export default ToastAlert;
