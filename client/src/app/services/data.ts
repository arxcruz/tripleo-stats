export interface Values {
    name: string;
    value: number;
}

export interface Status {
    status_type: string;
    data: Array<Values>;
}

export const data = [
    {
        "status_type": "today",
        "data": [
            {
                "name": "Passed",
                "value": 144
            },
            {
                "name": "Code issues",
                "value": 18
            },
            {
                "name": "Unknown issues",
                "value": 20
            },
            {
                "name": "Infra issues",
                "value": 0
            },
        ],
    },
    {
        "status_type": "yesterday",
        "data": [
            {
                "name": "Passed",
                "value": 801
            },
            {
                "name": "Code issues",
                "value": 141
            },
            {
                "name": "Unknown issues",
                "value": 18
            },
            {
                "name": "Infra issues",
                "value": 44
            },
        ],
    },
    {
        "status_type": "week",
        "data": [
            {
                "name": "Passed",
                "value": 7943
            },
            {
                "name": "Code issues",
                "value": 2683
            },
            {
                "name": "Unknown issues",
                "value": 319
            },
            {
                "name": "Infra issues",
                "value": 444
            },
        ],
    },
    {
        "status_type": "overall",
        "data": [
            {
                "name": "Passed",
                "value": 9091
            },
            {
                "name": "Code issues",
                "value": 3573
            },
            {
                "name": "Unknown issues",
                "value": 357
            },
            {
                "name": "Infra issues",
                "value": 558
            },
        ],
    },
];
