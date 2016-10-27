'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _icon = require('../widgets/icon');

var _icon2 = _interopRequireDefault(_icon);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _inputGroup = require('../form/input-group');

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _button = require('../widgets/button');

var _button2 = _interopRequireDefault(_button);

var _textButton = require('../widgets/text-button');

var _textButton2 = _interopRequireDefault(_textButton);

var _buttonGroup = require('../widgets/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


// Constants
var DEFAULT_ROWS_DISPLAYED = 10;
var DEFAULT_PAGE_BUTTONS_DISPLAYED = 5;

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = { rows: [], sort: null, reversed: false, search: '', page: 0 };
        _this.updateRows = _this.updateRows.bind(_this);
        _this.sortBy = _this.sortBy.bind(_this);
        _this.getSort = _this.getSort.bind(_this);
        _this.getSortIcon = _this.getSortIcon.bind(_this);
        _this.getHeaders = _this.getHeaders.bind(_this);
        _this.getKeys = _this.getKeys.bind(_this);
        _this.getColumns = _this.getColumns.bind(_this);
        _this.getPage = _this.getPage.bind(_this);
        _this.getRows = _this.getRows.bind(_this);
        _this.search = _this.search.bind(_this);
        _this.download = _this.download.bind(_this);
        _this.getFilteredRows = _this.getFilteredRows.bind(_this);
        _this.getPageCount = _this.getPageCount.bind(_this);
        _this.getPageButtons = _this.getPageButtons.bind(_this);
        _this.goToPage = _this.goToPage.bind(_this);
        return _this;
    }

    _createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateRows(this.props.rows);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.updateRows(props.rows);
        }
    }, {
        key: 'updateRows',
        value: function updateRows(rows) {
            var _this2 = this;

            rows = rows.map(function (row) {
                return _this2.getKeys(row);
            });
            this.setState({ rows: rows });
        }
    }, {
        key: 'sortBy',
        value: function sortBy(value) {
            if (this.props.sortable !== undefined && !this.props.sortable) return;
            var reversed = this.state.sort == value ? !this.state.reversed : false;

            if (this.state.sort == value) {
                var rows = _underscore2.default.filter(this.state.rows, function (row) {
                    return true;
                });
                return this.setState({ sort: value, reversed: reversed, rows: rows.reverse() });
            }

            var searchIndex = 0;
            for (var index in this.props.headers) {
                if (this.props.headers[index].value == value) {
                    searchIndex = index;
                    break;
                }
            }
            var rows = _underscore2.default.sortBy(this.state.rows, function (row) {
                return row[searchIndex];
            });
            this.setState({ sort: value, reversed: reversed, rows: rows });
        }
    }, {
        key: 'getSort',
        value: function getSort(value) {
            if (this.state.sort && this.state.sort == value) return 'sort-' + (this.state.reversed ? 'desc' : 'asc');else return 'sort';
        }
    }, {
        key: 'getSortIcon',
        value: function getSortIcon(value) {
            if (this.props.sortable === undefined || this.props.sortable) return _react2.default.createElement(_icon2.default, { name: this.getSort(value) });else return '';
        }
    }, {
        key: 'getHeaders',
        value: function getHeaders() {
            var _this3 = this;

            return _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    this.props.headers.map(function (header) {
                        if (typeof header.value === 'function') return _react2.default.createElement(
                            'th',
                            { key: header.label },
                            _react2.default.createElement(
                                'span',
                                { className: 'label' },
                                header.label
                            )
                        );else return _react2.default.createElement(
                            'th',
                            { key: header.label, onClick: function onClick() {
                                    return _this3.sortBy(header.value);
                                } },
                            _react2.default.createElement(
                                'span',
                                { className: 'label' },
                                header.label
                            ),
                            _this3.getSortIcon(header.value)
                        );
                    })
                )
            );
        }
    }, {
        key: 'getKeys',
        value: function getKeys(row) {
            var columns = [];
            for (var index in this.props.headers) {
                var header = this.props.headers[index];
                if (typeof header.value === 'function') columns.push({ type: 'action', index: index });else columns.push(row[header.value]);
            }
            return columns;
        }
    }, {
        key: 'getColumns',
        value: function getColumns(row) {
            var _this4 = this;

            var columns = row;

            return columns.map(function (column, index) {
                if ((typeof column === 'undefined' ? 'undefined' : _typeof(column)) === 'object' && column !== null && column.type == 'action') {
                    var action = _this4.props.headers[column.index].value;
                    var keys = row.map(function (item) {
                        return item;
                    });
                    var values = {};
                    _this4.props.headers.forEach(function (header) {
                        return typeof header.value !== 'function' && (values[header.value] = keys.shift());
                    });
                    return _react2.default.createElement(
                        'td',
                        { key: index },
                        action(values)
                    );
                }
                return _react2.default.createElement(
                    'td',
                    { key: index },
                    column
                );
            });
        }
    }, {
        key: 'getPage',
        value: function getPage() {
            var rows = this.getFilteredRows();
            if (this.props.paginated !== undefined && !this.props.paginated) return rows;
            var rowsDisplayed = this.props.rowsDisplayed || DEFAULT_ROWS_DISPLAYED;
            var start = this.state.page * rowsDisplayed;
            return rows.slice(start, start + rowsDisplayed);
        }
    }, {
        key: 'getRows',
        value: function getRows() {
            var _this5 = this;

            var rows = this.getPage();
            if (rows.length == 0) {
                return _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { className: 'default-message', colSpan: this.props.headers.length },
                            this.props.defaultMessage || 'No data found'
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'tbody',
                null,
                rows.map(function (row, index) {
                    return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _this5.getColumns(row)
                    );
                })
            );
        }
    }, {
        key: 'search',
        value: function search(value) {
            this.setState({ search: value, page: 0 });
        }
    }, {
        key: 'download',
        value: function download(e) {
            var link = 'data:application/csv;charset=utf-8,';
            var data = this.getFilteredRows();
            var rows = this.state.rows.map(function (row) {
                row = _underscore2.default.filter(row, function (item) {
                    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object';
                });
                var columns = row;
                columns = columns.map(function (column) {
                    return column.toString().split('"').join('""');
                });
                return '"' + columns.join('","') + '"';
            });
            rows.unshift('"' + _underscore2.default.filter(this.props.headers, function (header) {
                return typeof header.value !== 'function';
            }).map(function (header) {
                return header.label;
            }).join('","') + '"');
            link += encodeURIComponent(rows.join('\r\n'));

            e.target.href = link;
            e.target.download = 'download.csv';
        }
    }, {
        key: 'getFilteredRows',
        value: function getFilteredRows() {
            var searchString = this.state.search.toLowerCase();
            if (searchString.length == 0) return this.state.rows;else return _underscore2.default.filter(this.state.rows, function (row) {
                row = _underscore2.default.filter(row, function (item) {
                    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object';
                });
                return row.join('').toLowerCase().indexOf(searchString) >= 0;
            });
        }
    }, {
        key: 'getPageCount',
        value: function getPageCount() {
            var rows = this.getFilteredRows();
            return Math.max(1, Math.ceil(1.0 * rows.length / (this.props.rowsDisplayed || DEFAULT_ROWS_DISPLAYED)));
        }
    }, {
        key: 'getPageButtons',
        value: function getPageButtons() {
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
                if (currentPage > 0) pageButtons.push(_react2.default.createElement(
                    _button2.default,
                    { key: 'previous', onClick: this.goToPage(currentPage - 1), type: 'default' },
                    _react2.default.createElement(_icon2.default, { name: 'chevron-left solo' })
                ));

                for (var index = startingPage; index < maxPageButtons; index++) {
                    pageButtons.push(_react2.default.createElement(
                        _button2.default,
                        { key: 'page-' + index, onClick: this.goToPage(index), type: index == currentPage ? 'darker' : 'default' },
                        index + 1
                    ));
                }

                // Append next arrow
                if (currentPage + DEFAULT_PAGE_BUTTONS_DISPLAYED < pageCount) pageButtons.push(_react2.default.createElement(
                    _button2.default,
                    { key: 'next', onClick: this.goToPage(currentPage + 1), type: 'default' },
                    _react2.default.createElement(_icon2.default, { name: 'chevron-right solo' })
                ));

                // Return page buttons
                return pageButtons;
            }
        }
    }, {
        key: 'goToPage',
        value: function goToPage(page) {
            return function (e) {
                e.preventDefault();
                this.setState({ page: page });
            }.bind(this);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'table-container' },
                _react2.default.createElement(
                    'form',
                    { className: 'table-controls' },
                    this.props.downloadable || this.props.searchable ? _react2.default.createElement(
                        _column2.default,
                        { size: 'full' },
                        _react2.default.createElement(
                            _column2.default,
                            { size: 'six left' },
                            _react2.default.createElement(
                                _column2.default,
                                { size: 'six' },
                                this.props.searchable ? _react2.default.createElement(_inputGroup2.default, {
                                    name: 'table-search',
                                    type: 'search',
                                    rounded: true,
                                    placeholder: 'Search...',
                                    onChange: this.search }) : ''
                            )
                        ),
                        _react2.default.createElement(
                            _column2.default,
                            { size: 'six right' },
                            _react2.default.createElement(
                                _column2.default,
                                { size: 'six' },
                                this.props.downloadable ? _react2.default.createElement(
                                    'div',
                                    { className: 'table-buttons' },
                                    _react2.default.createElement(
                                        _textButton2.default,
                                        { link: '#', type: 'default', onClick: this.download },
                                        _react2.default.createElement(_icon2.default, { name: 'save' }),
                                        'Download'
                                    )
                                ) : ''
                            )
                        )
                    ) : ''
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'table-wrapper' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        this.getHeaders(),
                        this.getRows()
                    )
                ),
                this.props.paginated === undefined || this.props.paginated ? _react2.default.createElement(
                    'aside',
                    { className: 'table-pagination' },
                    _react2.default.createElement(
                        _column2.default,
                        { size: 'six left' },
                        _react2.default.createElement(
                            'div',
                            { className: 'page-info' },
                            this.getFilteredRows().length,
                            ' items - Page ',
                            this.state.page + 1,
                            ' of ',
                            this.getPageCount()
                        )
                    ),
                    _react2.default.createElement(
                        _column2.default,
                        { size: 'six right' },
                        _react2.default.createElement(
                            _buttonGroup2.default,
                            null,
                            this.getPageButtons()
                        )
                    )
                ) : ''
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;