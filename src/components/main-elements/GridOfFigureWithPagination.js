import Grid from './Grid';

export default function GridOfFigureWithPagination({ gifs }) {
  return (
    <div>
      <Grid gifs={gifs} />
      {/* другие элементы */}
    </div>
  );
}
