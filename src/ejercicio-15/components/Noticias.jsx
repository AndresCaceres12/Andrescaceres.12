import "./noticias.css";
import React, { useState} from "react";

const Noticiass = ({ news }) => {
  const [filteredNews, setFilteredNews] = useState(news);
  const [filter, setFilter] = useState({ date: "", category: "", keyword: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filterNews = () => {
    const { date, category, keyword } = filter;
    let filteredResults = news;
    if (date !== "") {
      filteredResults = filteredResults.filter((item) => item.date === date);
    }
    if (category !== "") {
      filteredResults = filteredResults.filter(
        (item) => item.category === category
      );
    }
    if (keyword !== "") {
      filteredResults = filteredResults.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredNews(filteredResults);
  };

  const resetFilter = () => {
    setFilter({ date: "", category: "", keyword: "" });
    setFilteredNews(news);
  };

  return (
    <div className="contenido23">
      <h1 className="title title-big">Noticias</h1>
      <h2 className="title title-small"></h2>

      <div className="input-group">
        <label className="label" htmlFor="date">
          Fecha:
        </label>
        <input
          className="input"
          type="text"
          name="date"
          value={filter.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="category">
          Categoria:
        </label>
        <select
          className="select"
          name="category"
          value={filter.category}
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="Sports">Deportes</option>
          <option value="Technology">Tecnologia</option>
          <option value="Politics">Polittica</option>
        </select>
      </div>

      <div className="input-group">
        <label className="label" htmlFor="keyword">
          Palabra clave:
        </label>
        <input
          className="input"
          type="text"
          name="keyword"
          value={filter.keyword}
          onChange={handleInputChange}
        />
      </div>

      <button className="button" onClick={filterNews}>
        Filtrar
      </button>
      <button className="button" onClick={resetFilter}>
        Recetear{" "}
      </button>

      <ul className="news-list">
        {filteredNews.map((item) => (
          <li className="news-item" key={item.id}>
            <h4 className="news-title"> - {item.title}</h4>
            <p className="news-content">{item.date}</p>
            <p className="news-content">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticiass;
