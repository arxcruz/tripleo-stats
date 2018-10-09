export interface Values {
    name: string;
    value: number;
}

export interface Status {
    status_type: string;
    data: Array<Values>;
}

export const jobs_data = [
    {
        "category_id": 1,
        "category_description": "TripleO CI check jobs",
        "jobs": [
            {
                "job_type": "container",
                "job_description": "Containers",
                "jobs": [
                    {
                        "job_id": 1,
                        "job_name": "tripleo-ci-centos-7-containers-multinode"
                    },
                    {
                        "job_id": 2,
                        "job_name": "tripleo-ci-centos-7-scenario001-multinode-oooq-container"
                    },
                    {
                        "job_id": 3,
                        "job_name": "tripleo-ci-centos-7-scenario002-multinode-oooq-container"
                    },
                    {
                        "job_id": 4,
                        "job_name": "tripleo-ci-centos-7-scenario003-multinode-oooq-container"
                    },
                    {
                        "job_id": 5,
                        "job_name": "tripleo-ci-centos-7-scenario004-multinode-oooq-container"
                    }
                ]
            },
            {
                "job_type": "puppet",
                "job_description": "Puppet jobs",
                "jobs": [
                    {
                        "job_id": 6,
                        "job_name": "puppet-openstack-lint"
                    },
                    {
                        "job_id": 7,
                        "job_name": "puppet-openstack-syntax-4"
                    },
                    {
                        "job_id": 8,
                        "job_name": "puppet-openstack-unit-4.8-centos-7"
                    }
                ]
            },
            {
                "job_type": "undercloud",
                "job_description": "Undercloud jobs",
                "jobs": [
                    {
                        "job_id": 9,
                        "job_name": "tripleo-ci-centos-7-undercloud-containers"
                    },
                    {
                        "job_id": 10,
                        "job_name": "tripleo-ci-centos-7-undercloud-oooq"
                    }
                ]
            },
            {
                "job_type": "image",
                "job_description": "Images",
                "jobs": [
                    {
                        "job_id": 11,
                        "job_name": "tripleo-buildimage-overcloud-full-centos-7"
                    }
                ]
            },
            {
                "job_type": "updates",
                "job_description": "Updates/Upgrades",
                "jobs": [
                    {
                        "job_id": 12,
                        "job_name": "tripleo-ci-centos-7-containerized-undercloud-upgrades"
                    }
                ]
            }
        ]
    }
];

export const chart_data = [
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
