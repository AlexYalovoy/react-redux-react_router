export default (login, password, users) => {
  return users.some( (user) => (
    user.login === login && user.password === password ? true: false )
  )
}

