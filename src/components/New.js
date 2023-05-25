function New() {
  return (
    <section className="form">
      <h2>Add a New Movie here</h2>
      <form>
        <label>
          <span>Title:</span>
          <input type="text" name="title" />
        </label>
        <label>
          <span>Rating:</span>
          <input type="number" name="rating" />
        </label>
        <label>
          <span>Release Date:</span>
          <input type="date" name="releaseDate" />
        </label>
        <label>
          <span>Description:</span>
          <textarea name="description"></textarea>
        </label>
        <label>
          <span>Genre:</span>
          <select name="genre">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
        </label>
        <label>
          <span>Poster:</span>
          <input type="file" name="poster" />
        </label>
        <label className="checkbox">
          <input type="checkbox" name="isFeatured" />
          <span>Is Featured</span>
          <button type="submit">Add Movie</button>
        </label>
      </form>
    </section>
  );
}

export default New;
