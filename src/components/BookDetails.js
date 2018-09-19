import * as React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchBook } from '../redux/actions/booksDetailsActions';

const mapStateToProps = (state) => {
  const { title, subtitle, isFetching } = state.bookDetails;
  return { title, subtitle, isFetching };
}

const mapDispatchToProps = (dispatch) => ({
  fetchBook(bookId){
    dispatch(fetchBook(bookId))
  }
})

class BookDetails extends React.Component {

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id)
  }

  render() {
    var { title, subtitle, isFetching } = this.props;
    return (
      <div>
        {isFetching ? <p>Loading data</p>
        :
        (
          <div>
            <div>{title}</div>
            <div>{subtitle}</div>
          </div>
        )}
      </div>
    )
  }
}

BookDetails.propTypes = {
  book: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);