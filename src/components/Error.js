import './Error.css';

export default function Error() {
  return (
    <div className="error-msg">
      <h3 className='error-msg__title'>Ошибка!</h3>
      <p className='error-msg__text'>Пожалуйста, попробуйте еще раз.</p>
    </div>
  );
}