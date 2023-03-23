import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {

    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: 'new',
        },
        {
            id: 2,
            title: "Sleep",
            status: 'completed',

        },
        {
            id: 3,
            title: "code",
            status: 'new',

        }
    ]


    const history = useHistory()
    const location = useLocation()
    const match = useRouteMatch()

    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStatus] = useState('all')


    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status || 'all')
    }, [location.search])


    const handleTodoClick = (todo, idx) => {

        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }

        setTodoList(newTodoList)
    }

    const handleShowAllCick = () => {
        //setFilteredStatus('all')

        const queryParam = { status: 'all' }
        history.push({
            pathName: match.path,
            search: queryString.stringify(queryParam)
        })
    }
    const handleShowCompletedClick = () => {
        //setFilteredStatus('completed')

        const queryParam = { status: 'completed' }
        history.push({
            pathName: match.path,
            search: queryString.stringify(queryParam)
        })
    }
    const handleShowNewClick = () => {
        //setFilteredStatus('new')

        const queryParam = { status: 'new' }
        history.push({
            pathName: match.path,
            search: queryString.stringify(queryParam)
        })

    }

    const renderTodoList = todoList.filter(todo => (filteredStatus === "all" || filteredStatus === todo.status))

    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        }

        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList)
    }



    return (
        <div>

            <h3>To do Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo list</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}></TodoList>


            <div>
                <button onClick={handleShowAllCick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>

            </div>
        </div>
    );
}

export default ListPage;