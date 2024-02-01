function Product({ users, onclick, count }) {

    const listItems = users.map(user => <li key={user.age} style={{ color: user.isUser ? 'red' : 'yellow' }}>{user.name}</li>)
    return (
        <>
        <button onClick={onclick}>click me</button>
            <ul>{listItems}</ul>
            <p>{count}</p>
            <h1>Testing Product 123</h1>
        </>
    )

}
export default Product