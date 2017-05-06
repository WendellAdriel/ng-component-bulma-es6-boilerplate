import swal from 'sweetalert';

/** @ngInject */
export default function MessageService() {
  return {
    showMessage
  };

  function showMessage(type, text) {
    swal({
      type,
      title: type.toUpperCase(),
      text,
      confirmButtonText: 'Ok'
    });
  }
}
