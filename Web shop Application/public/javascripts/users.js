let deleteUsersButton = document.querySelectorAll(".delete-user-button");
if (deleteUsersButton) {
    deleteUsersButton.forEach(item => {

        item.addEventListener('click', () => {
            console.log(item.id)
                // ERROR - FETCH BLOCKED BY CORS POLICY
            fetch(`http://localhost:3001/users/` + item.id, {
                method: 'DELETE',
            }).then(window.location.reload());
        });
    })
}