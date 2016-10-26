// References
import React from 'react';
import _ from 'underscore';

// Components
import Icon from '../widgets/icon';
import Column from './column';
import InputGroup from '../form/input-group';
import Button from '../widgets/button';
import TextButton from '../widgets/text-button';
import ButtonGroup from '../widgets/button-group';

// Constants
const DEFAULT_ROWS_DISPLAYED = 10;
const DEFAULT_PAGE_BUTTONS_DISPLAYED = 5;

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rows: [], sort: null, reversed: false, search: '', page: 0 };
        this.updateRows = this.updateRows.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.getSort = this.getSort.bind(this);
        this.getSortIcon = this.getSortIcon.bind(this);
        this.getHeaders = this.getHeaders.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.getColumns = this.getColumns.bind(this);
        this.getPage = this.getPage.bind(this);
        this.getRows = this.getRows.bind(this);
        this.search = this.search.bind(this);
        this.download = this.download.bind(this);
        this.getFilteredRows = this.getFilteredRows.bind(this);
        this.getPageCount = this.getPageCount.bind(this);
        this.getPageButtons = this.getPageButtons.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }

    componentDidMount() {
        this.updateRows(this.props.rows);
    }

    componentWillReceiveProps(props) {
        this.updateRows(props.rows);
    }

    updateRows(rows) {
        rows = rows.map(row => this.getKeys(row));
        this.setState({ rows: rows });
    }

    sortBy(value) {
        if (this.props.sortable !== undefined && !this.props.sortable) return;
        var reversed = this.state.sort == value ? !this.state.reversed : false;

        if (this.state.sort == value) {
            var rows = _.filter(this.state.rows, row => true);
            return this.setState({ sort: value, reversed: reversed, rows: rows.reverse() });
        }

        var searchIndex = 0;
        for (var index in this.props.headers) {
            if (this.props.headers[index].value == value) {
                searchIndex = index;
                break;
            }
        }
        var rows = _.sortBy(this.state.rows, row => row[searchIndex]);
        this.setState({ sort: value, reversed: reversed, rows: rows });
    }

    getSort(value) {
        if (this.state.sort && this.state.sort == value) return 'sort-' + (this.state.reversed ? 'desc' : 'asc');else return 'sort';
    }

    getSortIcon(value) {
        if (this.props.sortable === undefined || this.props.sortable) return React.createElement(Icon, { name: this.getSort(value) });else return '';
    }

    getHeaders() {
        return React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                this.props.headers.map(header => {
                    if (typeof header.value === 'function') return React.createElement(
                        'th',
                        { key: header.label },
                        React.createElement(
                            'span',
                            { className: 'label' },
                            header.label
                        )
                    );else return React.createElement(
                        'th',
                        { key: header.label, onClick: () => this.sortBy(header.value) },
                        React.createElement(
                            'span',
                            { className: 'label' },
                            header.label
                        ),
                        this.getSortIcon(header.value)
                    );
                })
            )
        );
    }

    getKeys(row) {
        var columns = [];
        for (var index in this.props.headers) {
            var header = this.props.headers[index];
            if (typeof header.value === 'function') columns.push({ type: 'action', index: index });else columns.push(row[header.value]);
        }
        return columns;
    }

    getColumns(row) {
        var columns = row;

        return columns.map((column, index) => {
            if (typeof column === 'object' && column !== null && column.type == 'action') {
                var action = this.props.headers[column.index].value;
                var keys = row.map(item => item);
                var values = {};
                this.props.headers.forEach(header => typeof header.value !== 'function' && (values[header.value] = keys.shift()));
                return React.createElement(
                    'td',
                    { key: index },
                    action(values)
                );
            }
            return React.createElement(
                'td',
                { key: index },
                column
            );
        });
    }

    getPage() {
        var rows = this.getFilteredRows();
        if (this.props.paginated !== undefined && !this.props.paginated) return rows;
        var rowsDisplayed = this.props.rowsDisplayed || DEFAULT_ROWS_DISPLAYED;
        var start = this.state.page * rowsDisplayed;
        return rows.slice(start, start + rowsDisplayed);
    }

    getRows() {
        var rows = this.getPage();
        if (rows.length == 0) {
            return React.createElement(
                'tbody',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'td',
                        { className: 'default-message', colSpan: this.props.headers.length },
                        this.props.defaultMessage || 'No data found'
                    )
                )
            );
        }
        return React.createElement(
            'tbody',
            null,
            rows.map((row, index) => {
                return React.createElement(
                    'tr',
                    { key: index },
                    this.getColumns(row)
                );
            })
        );
    }

    search(value) {
        this.setState({ search: value, page: 0 });
    }

    download(e) {
        var link = 'data:application/csv;charset=utf-8,';
        var data = this.getFilteredRows();
        var rows = this.state.rows.map(row => {
            row = _.filter(row, item => typeof item !== 'object');
            var columns = row;
            columns = columns.map(column => {
                return column.toString().split('"').join('""');
            });
            return '"' + columns.join('","') + '"';
        });
        rows.unshift('"' + _.filter(this.props.headers, header => typeof header.value !== 'function').map(header => header.label).join('","') + '"');
        link += encodeURIComponent(rows.join('\r\n'));

        e.target.href = link;
        e.target.download = 'download.csv';
    }

    getFilteredRows() {
        var searchString = this.state.search.toLowerCase();
        if (searchString.length == 0) return this.state.rows;else return _.filter(this.state.rows, row => {
            row = _.filter(row, item => typeof item !== 'object');
            return row.join('').toLowerCase().indexOf(searchString) >= 0;
        });
    }

    getPageCount() {
        var rows = this.getFilteredRows();
        return Math.max(1, Math.ceil(1.0 * rows.length / (this.props.rowsDisplayed || DEFAULT_ROWS_DISPLAYED)));
    }

    getPageButtons() {
        // Prepare parameters
        var currentPage = this.state.page;
        var pageCount = this.getPageCount();
        var startingPage = Math.min(currentPage, Math.max(0, pageCount - DEFAULT_PAGE_BUTTONS_DISPLAYED - 1));
        var maxPageButtons = Math.min(pageCount, this.state.page + DEFAULT_PAGE_BUTTONS_DISPLAYED);
        var pageButtons = [];

        if (pageCount == 1) {
            return '';
        } else {
            // Append previous arrow
            if (currentPage > 0) pageButtons.push(React.createElement(
                Button,
                { key: 'previous', onClick: this.goToPage(currentPage - 1), type: 'default' },
                React.createElement(Icon, { name: 'chevron-left solo' })
            ));

            for (var index = startingPage; index < maxPageButtons; index++) {
                pageButtons.push(React.createElement(
                    Button,
                    { key: 'page-' + index, onClick: this.goToPage(index), type: index == currentPage ? 'darker' : 'default' },
                    index + 1
                ));
            }

            // Append next arrow
            if (currentPage + DEFAULT_PAGE_BUTTONS_DISPLAYED < pageCount) pageButtons.push(React.createElement(
                Button,
                { key: 'next', onClick: this.goToPage(currentPage + 1), type: 'default' },
                React.createElement(Icon, { name: 'chevron-right solo' })
            ));

            // Return page buttons
            return pageButtons;
        }
    }

    goToPage(page) {
        return function (e) {
            e.preventDefault();
            this.setState({ page: page });
        }.bind(this);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'table-container' },
            React.createElement(
                'form',
                { className: 'table-controls' },
                this.props.downloadable || this.props.searchable ? React.createElement(
                    Column,
                    { size: 'full' },
                    React.createElement(
                        Column,
                        { size: 'six left' },
                        React.createElement(
                            Column,
                            { size: 'six' },
                            this.props.searchable ? React.createElement(InputGroup, {
                                name: 'table-search',
                                type: 'search',
                                rounded: true,
                                placeholder: 'Search...',
                                onChange: this.search }) : ''
                        )
                    ),
                    React.createElement(
                        Column,
                        { size: 'six right' },
                        React.createElement(
                            Column,
                            { size: 'six' },
                            this.props.downloadable ? React.createElement(
                                'div',
                                { className: 'table-buttons' },
                                React.createElement(
                                    TextButton,
                                    { link: '#', type: 'default', onClick: this.download },
                                    React.createElement(Icon, { name: 'save' }),
                                    'Download'
                                )
                            ) : ''
                        )
                    )
                ) : ''
            ),
            React.createElement(
                'div',
                { className: 'table-wrapper' },
                React.createElement(
                    'table',
                    { className: 'table' },
                    this.getHeaders(),
                    this.getRows()
                )
            ),
            this.props.paginated === undefined || this.props.paginated ? React.createElement(
                'aside',
                { className: 'table-pagination' },
                React.createElement(
                    Column,
                    { size: 'six left' },
                    React.createElement(
                        'div',
                        { className: 'page-info' },
                        this.getFilteredRows().length,
                        ' items - Page ',
                        this.state.page + 1,
                        ' of ',
                        this.getPageCount()
                    )
                ),
                React.createElement(
                    Column,
                    { size: 'six right' },
                    React.createElement(
                        ButtonGroup,
                        null,
                        this.getPageButtons()
                    )
                )
            ) : ''
        );
    }

}