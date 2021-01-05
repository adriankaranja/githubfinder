import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'
import GithubContext from '../context/github/githubContext'

function Users() {
	const githubContext = useContext(GithubContext)
	const { users, loading } = githubContext

	return (
		<div style={userStyle}>
			{loading ? (
				<Spinner />
			) : (
				users.length > 0 &&
				users.map((user) => <UserItem key={user.id} user={user} />)
			)}
		</div>
	)
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
}

export default Users
