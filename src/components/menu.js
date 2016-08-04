import React, { Component, PropTypes } from 'react';
import {
    defineMessages,
    injectIntl,
    intlShape,
    FormattedMessage,
} from 'react-intl';

import './styles.scss';

const messages = defineMessages({
    file: {
        id: 'file',
        defaultMessage: 'File',
        description: 'The file menu item',
    },
    edit: {
        id: 'edit',
        defaultMessage: 'Edit',
        description: 'The edit menu item',
    },
    help: {
        id: 'help',
        defaultMessage: 'Help',
        description: 'The help menu item',
    },
});
export class Menu extends Component {

    constructor() {
        super();
        this.state = {
            author: '123'
        };
    }

    static propTypes = {
        intl: intlShape,
        className: PropTypes.string,
        author: PropTypes.string,
        onSelect: PropTypes.func,
    };

    onSelectHandler = e => {
        const { onSelect } = this.props;
    console.log(this.state);
        if (onSelect) {
            onSelect(e);
        }
    };

    updateAuthor = event => {
    this.setState({author: event.target.value});
    };

    render() {
        const { formatMessage } = this.props.intl;
console.log(this.state);
        return (
            <div className='main-menu'>
                <FormattedMessage
                    id='helloWorld'
                    defaultMessage='Hello World!'
                    description='greeting message'
                />
                <ul>
                            <input value={this.state.author.toString()} onChange={this.updateAuthor} type="text" />
                    <li>
                        <a href='#'  onClick={ this.onSelectHandler }>
                            { formatMessage(messages.file) }
                        </a>
                    </li>
                    <li>
                        <a href='#' onClick={ this.onSelectHandler }>
                            { formatMessage(messages.edit) }
                        </a>
                    </li>
                    <li>
                        <a href='#' onClick={ this.onSelectHandler }>
                            { formatMessage(messages.help) }
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default injectIntl(Menu);
