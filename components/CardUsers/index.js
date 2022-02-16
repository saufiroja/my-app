import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const CardUser = (props) => {
    return(
        <div className="px-4 py-3 w-[80%]">
            {
                props.users.length > 0 ? (
                    <div>
                        {
                        props.users.map(user => {
                            return (
                                <div key={user.id} onClick={() => props.handleDetailUser(user)} className="border-2 border-gray-200 flex flex-row items-center p-3 text-center mt-3 rounded-xl ml-[11%] cursor-pointer">
                                    <FontAwesomeIcon icon={faUser} className="ml-4" />
                                    <div className='ml-8 hover:underline'>{user.username}</div>
                                </div>
                            )
                        })
                    }
                    </div>
                ) : null
            }
        </div>
    )
}

export default CardUser;