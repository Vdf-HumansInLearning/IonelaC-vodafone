let deleteUsersButton = document.querySelectorAll(".delete-user-button");
if (deleteUsersButton) {
    deleteUsersButton.forEach(item => {

        item.addEventListener('click', () => {
            // ERROR - FETCH BLOCKED BY CORS POLICY
            fetch(`http://localhost:3001/users/` + item.id, {
                method: 'DELETE',
                mode: 'no-cors'
            }).then(data => {
                console.log(data)
            });
        });
    })
}