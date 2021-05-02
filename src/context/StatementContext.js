import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const StatementContext = createContext({
    openStatements: [],
    updateStatement: () => {},
    deleteStatement: () => {}
})

export default StatementContext;

export class StatementProvider extends Component {
    constructor(props){
        super(props)
        const state = {
            openStatements: [],
            error: null
        }
        this.state = state;
    }
    async componentDidMount(){
        try{
            await apiService.getOpenStatements().then(statement => {
                this.setState({openStatements: statement})
            })
        } catch(error){
            console.log(error);
        }

    }
    updateStatement = (id, data) => {
        const statementList = [...this.state.openStatements ];
        const findStatement = statementList.find(el => el.id === id );
        findStatement.paid = data.paid;
        findStatement.amount_paid = data.amount_paid;
        findStatement.interest_rate = data.interest_rate;
        const updateStatementIndex = statementList.findIndex(el => el.id === id);
        statementList.splice(updateStatementIndex, 1, findStatement)
        this.setState({openStatements: statementList});
    }
    deleteStatement = id => {
        const statementList = this.state.openStatements.filter(el => el.id !== id);
        this.setState({openStatements: statementList});
    }
    render() {
        const value = {
            openStatements: this.state.openStatements,
            updateStatement: this.updateStatement,
            deleteStatement: this.deleteStatement
        }
        return (
            <StatementContext.Provider value={value}>
                {this.props.children}
            </StatementContext.Provider>
        )
    }
}