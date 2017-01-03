/**
 * version
 */
export class version {
    constructor(_versionString: string) {
        this.versionString = _versionString;
    }

    private _versionString : string;
    private _platformType : string;
    private _brand : string;
    private _language : string;
    private _skin: string;
    private _versionNumber: string;
    private _deviceType: string;
    private _buildNumber: string;

    public get versionString() : string {
        return this._versionString;
    }
    public set versionString(v : string) {
        this._versionString = v;
        this.decodeVersion();
    }
    
    public get platformType() : string {
        return this._platformType;
    }

    public get brand() : string {
        return this._brand;
    }

    public get language() : string {
        return this._language;
    }
    
    public get skin() : string {
        return this._skin;
    }

    public get versionNumber() : string {
        return this._versionNumber;
    }

    public get deviceType() : string {
        return this._deviceType;
    }

    public get buildNumber() : string {
        return this._buildNumber;
    }

    public decodeVersion() {
        var parts: string[] = this._versionString.split('-');
        this._platformType = parts[0];
        this._brand = parts[1];
        this._language = parts[2];
        this._skin = parts[3];
        this._versionNumber = parts[4];
        this._deviceType = parts[5];
        this._buildNumber = parts[6];
    }

}