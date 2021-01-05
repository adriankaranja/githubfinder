import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

function Search() {
	const [text, setText] = useState('')
	const githubContext = useContext(GithubContext)
	const alertContext = useContext(AlertContext)

	const { searchUsers, users } = githubContext
	const { setAlert } = alertContext

	const showClear = users.length > 0 ? true : false
	const onChange = (e) => {
		setText(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (text === '') {
			setAlert('Please enter something', 'light')
		} else {
			searchUsers(text)
			setText('')
		}
	}
	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' className='btn-dark btn-block' />
			</form>
			{showClear && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	)
}
Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
}

export default Search
