import { useState } from "react";
import Layout from "./components/Layout";

export default function categories() {
  const [name, setName] = useState("");
  async function saveCategory() {
    await axios.post("/api/categories", { name });
    setName("");
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder={"Category name"}
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        <button type="submit" className="btn-primary py-1">
          Save
        </button>
      </form>
    </Layout>
  );
}
