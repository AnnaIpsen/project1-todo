// let createBtn = document.getElementById("createBtn")
// function handleBtn () {
//     $.ajax({
//       url: '/createUser',
//       type: 'POST',
//       cache: false,
//       data: {
//         Username: $('#username').val(),
//         email: $('#email').val(),
//         password: $('#password').val(),
//         confirmPassword: $('#confirmPass').val()
//       },
//       success: function () {
//         $('#errorMessage').css('display', 'none');
//         alert('Creation succesful');
//       },
//       error: function (data) {
//         $('#errorMessage').css('display', 'block');
//         let errors = JSON.parse(data.responseText);
//         let errorsContainer = $('#errors');
//         errorsContainer.innerHTML = '';
//         let errorsList = '';
  
//         for (var i = 0; i < errors.length; i++) {
//           errorsList += '<li>' + errors[i].msg + '</li>';
//         }
//         errorsContainer.html(errorsList);
//       }
//     });
//   };
//   createBtn.addEventListener("click", handleBtn)