import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await res.json();
        this.setState({ ...this.state, data });
      };
      fetchData();
    }

    render() {
      let { term, data } = this.state;
      const handleOnChange = (event) => {
        this.setState({ ...this.state, term: event.target.value });
      };
      let filteredData = data.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
     // console.log("filteredDAta", filteredData);
      return (
        <div>
          <h2>{entity}</h2>
          <input type="text" value={term} onChange={handleOnChange} />
          <WrappedComponent data={filteredData} />
        </div>
      );
    }
  };
};
export default HOC;
