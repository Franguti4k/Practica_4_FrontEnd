import type { Signal } from "@preact/signals";
import type Post from "../models/post.ts";
import PostComponent from "../components/Post.tsx";

interface HomeProps {
  isGrid: Signal<boolean>;
  posts: Post[];
}

export default function MainView({ isGrid, posts }: HomeProps) {
  return (
    <div className="main-view-container">
      <div className="view-toggle">
        <button
          type="button"
          className={`toggle-button ${isGrid.value ? "active" : "hover"}`} //añado hover
          title={isGrid.value
            ? "Cambiar a vista de lista"
            : "Cambiar a vista de cuadrícula"}
          onClick={() => isGrid.value = !isGrid.value} //Añado funcion onclick para que cambie la señal isGrid para cambiar entre cuadricula y lista
        >
          {isGrid.value ? "☰ Lista" : "⏹️ Cuadrícula"}
        </button>
      </div>

      <div
        className={`posts-container ${
          isGrid.value ? "grid-view" : "list-view"
        }`}
      >
        {posts.map((post) => (
          <PostComponent key={post._id} post={post} isGrid={isGrid.value} />
        ))}
      </div>
    </div>
  );
}
