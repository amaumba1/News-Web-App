import React from "react";
import _ from "lodash";
import axios from 'axios'; 

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//const rawData = makeData();

const requestData = (pageSize, page, sorted, filtered) => {
    axios.get(`https://hn.algolia.com/api/v1/search?query=${page}`).then((response) => {
        if(response.status === 200) {
            return response.result
        } else {
            throw new Error('Unable to fetch the data')
        }
    }).then((result) => {console.log(result)})
      .catch((error) => {console.log(error)})
        // You can retrieve your data however you want, in this case, we will just use some local data.
        let filteredData = requestData;

        // You can use the filters in your request, but you are responsible for applying them.
        if (filtered.length) {
            filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                return filteredSoFar.filter(row => {
                    return (row[nextFilter.id] + "").includes(nextFilter.value);
                });
            }, filteredData);
        }
        // You can also use the sorting in your request, but again, you are responsible for applying it.
        const sortedData = _.orderBy(
            filteredData,
            sorted.map(sort => {
                return row => {
                    if (row[sort.id] === null || row[sort.id] === undefined) {
                        return -Infinity;
                    }
                    return typeof row[sort.id] === "string"
                        ? row[sort.id].toLowerCase()
                        : row[sort.id];
                };
            }),
            sorted.map(d => (d.desc ? "desc" : "asc"))
        );

        // You must return an object containing the rows of the current page, and optionally the total pages number.
        const res = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
        };

        // Here we'll simulate a server response with 500ms of delay.
        setTimeout(() => (res), 500);
    };

class DataTableExcel extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            pages: null,
            loading: true
        };
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData(state, instance) {
        // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
        // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
        this.setState({ loading: false });
        // Request the data however you want.  Here, we'll use our mocked service we created earlier
        requestData(
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered
         ).then(res => {
            // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
              this.setState({
                 data: res.rows,
                 pages: res.pages,
                 loading: false
              });
         });
    }
    render() {
        const { result, pages, loading } = this.state;
        return (
            <div>
                <ReactTable
                    columns={[
                        {
                            Header: "Title",
                            id: "title",
                            accessor: d => d.title
                        },
                        {
                            Header: "Author",
                            id: "author",
                            accessor: d => d.author
                        },
                        {
                            Header: "Points",
                            id: "points",
                            accessor: d => d.points
                        },
                        {
                            Header: "Number of Comments",
                            id: "num_comments",
                            accessor: d => d.num_comments
                        },
                        {
                            Header: "URL Link",
                            id: "url",
                            accessor: d => d.url
                        }
                    ]}
                    manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                    data={result}
                    pages={pages} // Display the total number of pages
                    loading={loading} // Display the loading overlay when we need it
                    onFetchData={this.fetchData} // Request new data when things change
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />

            </div>
        );
    }
}

export default DataTableExcel

