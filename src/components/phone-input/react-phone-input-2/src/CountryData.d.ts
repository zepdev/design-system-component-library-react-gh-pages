export default class CountryData {
    constructor(enableAreaCodes: any, enableTerritories: any, regions: any, onlyCountries: any, preferredCountries: any, excludeCountries: any, preserveOrder: any, masks: any, priority: any, areaCodes: any, localization: any, prefix: any, defaultMask: any, alwaysDefaultMask: any);
    onlyCountries: any;
    preferredCountries: any;
    hiddenAreaCodes: any;
    filterRegions: (regions: any, countries: any) => any;
    sortTerritories: (initializedTerritories: any, initializedCountries: any) => any[];
    getFilteredCountryList: (countryCodes: any, sourceCountryList: any, preserveOrder: any) => any;
    localizeCountries: (countries: any, localization: any, preserveOrder: any) => any;
    getCustomAreas: (country: any, areaCodes: any) => any[];
    excludeCountries: (onlyCountries: any, excludedCountries: any) => any;
}
//# sourceMappingURL=CountryData.d.ts.map