import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        if (this.props.formType === 'sign in') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>{'Sign in below'}</p>
                        <p>or {this.props.navLink}</p>
                        {this.renderErrors()}
                        <p>{'Sign in the same way you did last time'}</p>
                        <p>{'to avoid creating a second Kiva account.'}</p>
                        <div>
                            <label>Email
                            <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <br />
                            <label>Password
                            <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <br />
                            <input type="submit"
                                value={'Sign in'}
                            />
                            <br/>
                            <input type="submit"
                                value={'Demo User'}
                            />
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>{'Create a new account below'}</p>
                        <p>or {this.props.navLink}</p>
                        {this.renderErrors()}
                        <div>
                            <label>First name
                            <br />
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                />
                            </label>
                            <br/>
                            <label>Last name
                            <br />
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                />
                            </label>
                            <br />
                            <label>Email
                            <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <br />
                            <label>Create password
                            <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <br />
                            <input type="submit"
                                value={'Create new account'}
                            />
                        </div>
                    </form>
                </div>
            )
        }
    }
};

export default SessionForm;