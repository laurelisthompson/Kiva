import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import { createLendingTransaction, fetchAllLendingTransactions } from '../../actions/lender_actions';
import LoanIndex from './loan_index';

const mSTP = (state, ownProps) => {
    return {
        loans: Object.values(state.entities.loans),
        currentUser: state.entities.users[state.session.id], //added to replace session: state.session
        lendingTransactions: Object.values(state.entities.lenders), //added
    }
};

const mDTP = (dispatch) => {
    return {
        fetchAllLoans: () => dispatch(fetchAllLoans()),
        logout: () => dispatch(logout()),
        createLendingTransaction: (lendingTransaction) => dispatch(createLendingTransaction(lendingTransaction)),
        fetchAllLendingTransactions: () => dispatch(fetchAllLendingTransactions()),
    }
};

export default connect(mSTP, mDTP)(LoanIndex);