import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        const {
            props: { children, fallback },
            state: { error }
        } = this;
        if (error) {
            return fallback(error);
        }
        return children;
    }
}

export default ErrorBoundary;
