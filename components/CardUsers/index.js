import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CardUser(props) {
  return (
    <div className="xl:px-4 xl:py-3 lg:px-4 lg:py-3 md:px-2 md:py-3 w-[80%]">
      {
                props.users.length > 0 ? (
                  <div>
                    {
                        props.users.map((user) => (
                          <div key={user.id} onClick={() => props.handleDetailUser(user)} className="border-2 border-gray-200 flex flex-row items-center p-3 text-center mt-3 rounded-xl xl:ml-[11%] lg:ml-[12%] md:ml-[13%] sm:ml-[13%] cursor-pointer">
                            <FontAwesomeIcon icon={faUser} className="xl:ml-4 lg:ml-3 md:ml-2 sm:ml-2" />
                            <div className="xl:ml-8 lg:ml-5 md:ml-4 sm:ml-3 hover:underline">{user.username}</div>
                          </div>
                        ))
                    }
                  </div>
                ) : null
            }
    </div>
  );
}

export default CardUser;
