import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserInfo() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div style={styles.container}>
      <span style={styles.name}>{name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </div>
  );
}
