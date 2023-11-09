export enum DeviceName {
    Classic300S = 'Classic300S',
    Classic300S_US = "LUH-A601S-WUSB",
    Classic200S = "Classic200S",
    Dual200S = 'Dual200S',
    Dual200S_LIGHT = 'LUH-D301S-WUSR',
    Dual200S_EU = 'LUH-D301S-WEU',
    Dual200S_UK = 'LUH-D301S-WUK',
    Dual200S_JP = 'LUH-D301S-WJP',
    LV600S = "LUH-A602S-WUS",
    LV600S_REMOTE = "LUH-A602S-WUSR",
    LV600S_EU = "LUH-A602S-WEU",
    LV600S_UK = "LUH-A602S-WUK",
    LV600S_JP = "LUH-A602S-WJP",
    OASIS = "LUH-O451S-WUS",
    OASIS_UK = "LUH-O451S-WUK",
    OASIS_EU = "LUH-O451S-WEU",
    OASIS_JP = "LUH-O451S-WJP",
    OASIS_1000S = "LUH-M101S-WUS",
    OASIS_1000S_UK = "LUH-M101S-WUK",
    OASIS_1000S_EU = "LUH-M101S-WEU",
    OASIS_1000S_JP = "LUH-M101S-WJP",
    OASIS_MIST_600S = "LUH-O601S-KUS",
}

export interface DeviceType {
    isValid: (input: string) => boolean;
    hasAutoMode: boolean;
    coolMistLevels: number;
    hasLight: boolean;
    hasColorMode: boolean;
    hasSleepMode: boolean;
    hasWarmMode: boolean;
    warmMistLevels?: number;
    minHumidityLevel: number;
    maxHumidityLevel: number;
}

// All supported models.
// TODO: Refactor this to look for a device prefix instead of the full device name.
//  That will allow us to reduce this list size and cause less failures when new model variations pop up.
const deviceTypes: DeviceType[] = [
    {
        isValid: (input: string) =>
            input.includes(DeviceName.Classic300S),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: true,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.Classic300S_US),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: true,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.Classic200S),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: false,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) => input.includes(DeviceName.Dual200S),
        hasAutoMode: true,
        coolMistLevels: 2,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: false,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) => input.includes(DeviceName.Dual200S_LIGHT),
        hasAutoMode: true,
        coolMistLevels: 2,
        hasLight: true,
        hasColorMode: true,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) => input.includes(DeviceName.Dual200S_EU),
        hasAutoMode: true,
        coolMistLevels: 2,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: false,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) => input.includes(DeviceName.Dual200S_UK),
        hasAutoMode: true,
        coolMistLevels: 2,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: false,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) => input.includes(DeviceName.Dual200S_JP),
        hasAutoMode: true,
        coolMistLevels: 2,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: false,
        hasWarmMode: false,
        minHumidityLevel: 30,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.LV600S),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.LV600S_REMOTE),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.LV600S_EU),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.LV600S_UK),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.LV600S_JP),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_UK),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_EU),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_JP),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: true,
        warmMistLevels: 3,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_1000S),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_1000S_UK),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_1000S_EU),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_1000S_JP),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
    {
        isValid: (input: string) =>
            input.includes(DeviceName.OASIS_MIST_600S),
        hasAutoMode: true,
        coolMistLevels: 9,
        hasLight: false,
        hasColorMode: false,
        hasSleepMode: true,
        hasWarmMode: false,
        minHumidityLevel: 40,
        maxHumidityLevel: 80
    },
];

export default deviceTypes;
