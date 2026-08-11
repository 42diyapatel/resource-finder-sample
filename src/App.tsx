import { resources } from './data/resources';

export default function App() {
  return (
    <main className="page">
      <h1 className="page__title">Resource finder</h1>
      <p className="page__subtitle">
        Search the partner directory for services near you.
      </p>

      {/*
        TODO
        The directory is imported above and is not rendered yet.
        Styling is already done, so you should not need to write any CSS.
      */}
      <p className="results__count">{resources.length} resources loaded.</p>
    </main>
  );
}
