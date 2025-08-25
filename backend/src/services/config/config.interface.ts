export const ConfigToken = Symbol.for('Config');

export interface IConfig {
    port: number;
    nasa_api: {
        key: string;
        url: string;
    };
    frontend: {
        url: string;
    };
}
