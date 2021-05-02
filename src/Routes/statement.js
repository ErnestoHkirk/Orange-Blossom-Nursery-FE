import React from 'react';
import StatementDisplay from '../components/Display/statement-display';
import { StatementProvider } from './../context/StatementContext';

export default function statement() {
    return (
        <section class="container mt-4" id="section--statement">
            <StatementProvider>
                <StatementDisplay/>
            </StatementProvider>
        </section>
    )
}


