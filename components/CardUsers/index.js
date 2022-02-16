// import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
// import './listUser.css'

const CardUser = (props) => {
    return(
        <div className="px-4 py-3">
            {
                props.users.length > 0 ? (
                    // <Fragment>
                        <div>
                            {
                            props.users.map(user => {
                                return (
                                    <div key={user.id} onClick={() => props.handleDetailUser(user)} className="border-2 border-gray-200 flex flex-row items-center p-3 text-center mt-3 rounded-xl">
                                        <FontAwesomeIcon icon={faUser} />
                                        <div>{user.username}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    // </Fragment>
                ) : null
            }
        </div>
    )
}

export default CardUser;