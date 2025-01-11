import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import { range } from "@/utils";

function VapourExerciseSkeleton() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(0, 15).map((_, index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default VapourExerciseSkeleton;
