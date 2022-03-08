export function Button({ loading, onClick, title }) {
  if (loading) {
    return <button className="bg-gray-300 text-gray-600 h-12 rounded-large mt-4 hover:cursor-not-allowed">Loading ...</button>;
  }
  return (
    <button type="button" className="bg-primary text-white h-12 rounded-large mt-4" onClick={onClick} loading={loading}>{title}</button>
  );
}
