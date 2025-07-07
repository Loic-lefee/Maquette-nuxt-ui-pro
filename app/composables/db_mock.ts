import { useGammeStore } from "~~/store/useGamme";

export const useMockDB = () => {

    const gammeStore = useGammeStore()

    const fullData = {
        SECU: {
            applications: [
                {
                    name: "secu_1",
                    famille: "Applications",
                    dateInstallation: "2024-01-05",
                    statut: "Actif",
                    dateDeploiement: "2024-01-12",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        },
                        {
                            version: "1.1",
                            clients: [
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 120
                },
                {
                    name: "secu_2",
                    famille: "Applications",
                    dateInstallation: "2024-01-10",
                    statut: "En maintenance",
                    dateDeploiement: "2024-01-20",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" },
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" }
                            ]
                        }
                    ],
                    value: 180
                },
                {
                    name: "secu_3",
                    famille: "Backend",
                    dateInstallation: "2024-01-13",
                    statut: "Actif",
                    dateDeploiement: "2024-01-23",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 90
                },
                {
                    name: "secu_4",
                    famille: "Backend",
                    dateInstallation: "2024-01-15",
                    statut: "Actif",
                    dateDeploiement: "2024-01-25",
                    versions: [
                        {
                            version: "3.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" }
                            ]
                        },
                        {
                            version: "3.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" }
                            ]
                        }
                    ],
                    value: 210
                },
                {
                    name: "secu_5",
                    famille: "Outils",
                    dateInstallation: "2024-01-17",
                    statut: "Actif",
                    dateDeploiement: "2024-01-27",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 160
                },

                {
                    name: "secu_6",
                    famille: "Outils",
                    dateInstallation: "2024-01-20",
                    statut: "En maintenance",
                    dateDeploiement: "2024-01-30",
                    versions: [
                        {
                            version: "2.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 130
                },
                {
                    name: "secu_7",
                    famille: "Applications",
                    dateInstallation: "2024-01-23",
                    statut: "Actif",
                    dateDeploiement: "2024-02-01",
                    versions: [
                        {
                            version: "1.2",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        },
                        {
                            version: "1.3",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 170
                },
                {
                    name: "secu_8",
                    famille: "Applications",
                    dateInstallation: "2024-01-25",
                    statut: "Obsolète",
                    dateDeploiement: "2024-02-03",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" }
                            ]
                        }
                    ],
                    value: 200
                },
                {
                    name: "secu_9",
                    famille: "Backend",
                    dateInstallation: "2024-01-27",
                    statut: "Actif",
                    dateDeploiement: "2024-02-05",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        },
                        {
                            version: "2.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 110
                },
                {
                    name: "secu_10",
                    famille: "Backend",
                    dateInstallation: "2024-01-29",
                    statut: "En maintenance",
                    dateDeploiement: "2024-02-06",
                    versions: [
                        {
                            version: "1.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 145
                },

                {
                    name: "secu_11",
                    famille: "Applications",
                    dateInstallation: "2024-02-02",
                    statut: "Actif",
                    dateDeploiement: "2024-02-10",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" }
                            ]
                        }
                    ],
                    value: 125
                },
                {
                    name: "secu_12",
                    famille: "Applications",
                    dateInstallation: "2024-02-03",
                    statut: "Actif",
                    dateDeploiement: "2024-02-12",
                    versions: [
                        {
                            version: "1.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 135
                },
                {
                    name: "secu_13",
                    famille: "Backend",
                    dateInstallation: "2024-02-04",
                    statut: "Actif",
                    dateDeploiement: "2024-02-14",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 140
                },
                {
                    name: "secu_14",
                    famille: "Backend",
                    dateInstallation: "2024-02-05",
                    statut: "Actif",
                    dateDeploiement: "2024-02-16",
                    versions: [
                        {
                            version: "2.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 150
                },
                {
                    name: "secu_15",
                    famille: "Outils",
                    dateInstallation: "2024-02-06",
                    statut: "Actif",
                    dateDeploiement: "2024-02-18",
                    versions: [
                        {
                            version: "3.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 155
                },
                {
                    name: "secu_16",
                    famille: "Outils",
                    dateInstallation: "2024-02-07",
                    statut: "Actif",
                    dateDeploiement: "2024-02-20",
                    versions: [
                        {
                            version: "3.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 160
                },
                {
                    name: "secu_17",
                    famille: "Applications",
                    dateInstallation: "2024-02-08",
                    statut: "Actif",
                    dateDeploiement: "2024-02-22",
                    versions: [
                        {
                            version: "1.2",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" }
                            ]
                        }
                    ],
                    value: 170
                },
                {
                    name: "secu_18",
                    famille: "Applications",
                    dateInstallation: "2024-02-09",
                    statut: "Actif",
                    dateDeploiement: "2024-02-24",
                    versions: [
                        {
                            version: "1.3",
                            clients: [
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 180
                },
                {
                    name: "secu_19",
                    famille: "Backend",
                    dateInstallation: "2024-02-10",
                    statut: "Actif",
                    dateDeploiement: "2024-02-26",
                    versions: [
                        {
                            version: "2.2",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 190
                },
                {
                    name: "secu_20",
                    famille: "Backend",
                    dateInstallation: "2024-02-11",
                    statut: "Actif",
                    dateDeploiement: "2024-02-28",
                    versions: [
                        {
                            version: "3.0",
                            clients: [
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" }
                            ]
                        }
                    ],
                    value: 200
                },

                {
                    name: "secu_21",
                    famille: "Applications",
                    dateInstallation: "2024-02-12",
                    statut: "Actif",
                    dateDeploiement: "2024-03-01",
                    versions: [
                        {
                            version: "1.4",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" }
                            ]
                        }
                    ],
                    value: 155
                },
                {
                    name: "secu_22",
                    famille: "Applications",
                    dateInstallation: "2024-02-13",
                    statut: "Actif",
                    dateDeploiement: "2024-03-03",
                    versions: [
                        {
                            version: "2.1",
                            clients: [
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" }
                            ]
                        }
                    ],
                    value: 165
                },
                {
                    name: "secu_23",
                    famille: "Outils",
                    dateInstallation: "2024-02-14",
                    statut: "Actif",
                    dateDeploiement: "2024-03-05",
                    versions: [
                        {
                            version: "2.2",
                            clients: [
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 175
                },
                {
                    name: "secu_24",
                    famille: "Backend",
                    dateInstallation: "2024-02-15",
                    statut: "Actif",
                    dateDeploiement: "2024-03-07",
                    versions: [
                        {
                            version: "3.1",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 185
                },
                {
                    name: "secu_25",
                    famille: "Backend",
                    dateInstallation: "2024-02-16",
                    statut: "Actif",
                    dateDeploiement: "2024-03-09",
                    versions: [
                        {
                            version: "3.2",
                            clients: [
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" }
                            ]
                        }
                    ],
                    value: 195
                },

                {
                    name: "secu_26",
                    famille: "Outils",
                    dateInstallation: "2024-02-17",
                    statut: "Actif",
                    dateDeploiement: "2024-03-11",
                    versions: [
                        {
                            version: "2.3",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 150
                },
                {
                    name: "secu_27",
                    famille: "Outils",
                    dateInstallation: "2024-02-18",
                    statut: "Actif",
                    dateDeploiement: "2024-03-13",
                    versions: [
                        {
                            version: "2.4",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 160
                },
                {
                    name: "secu_28",
                    famille: "Applications",
                    dateInstallation: "2024-02-19",
                    statut: "Actif",
                    dateDeploiement: "2024-03-15",
                    versions: [
                        {
                            version: "1.5",
                            clients: [
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 170
                },
                {
                    name: "secu_29",
                    famille: "Backend",
                    dateInstallation: "2024-02-20",
                    statut: "Actif",
                    dateDeploiement: "2024-03-17",
                    versions: [
                        {
                            version: "3.3",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 180
                },
                {
                    name: "secu_30",
                    famille: "Backend",
                    dateInstallation: "2024-02-21",
                    statut: "Actif",
                    dateDeploiement: "2024-03-19",
                    versions: [
                        {
                            version: "3.4",
                            clients: [
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" }
                            ]
                        }
                    ],
                    value: 190
                }




            ]
        }
        ,
        POP: {
            applications: [
                {
                    name: "pop_1",
                    famille: "Outils",
                    dateInstallation: "2024-02-01",
                    statut: "Actif",
                    dateDeploiement: "2024-02-10",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 200
                },
                {
                    name: "pop_2",
                    famille: "Applications",
                    dateInstallation: "2024-02-03",
                    statut: "En maintenance",
                    dateDeploiement: "2024-02-13",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        },
                        {
                            version: "2.0",
                            clients: [
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 150
                },
                {
                    name: "pop_3",
                    famille: "Backend",
                    dateInstallation: "2024-02-05",
                    statut: "Obsolète",
                    dateDeploiement: "2024-02-15",
                    versions: [
                        {
                            version: "1.2",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 220
                },
                {
                    name: "pop_4",
                    famille: "Backend",
                    dateInstallation: "2024-02-07",
                    statut: "Actif",
                    dateDeploiement: "2024-02-17",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" }
                            ]
                        }
                    ],
                    value: 180
                },
                {
                    name: "pop_5",
                    famille: "Outils",
                    dateInstallation: "2024-02-09",
                    statut: "Actif",
                    dateDeploiement: "2024-02-19",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        },
                        {
                            version: "1.1",
                            clients: [
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 195
                },
                {
                    name: "pop_6",
                    famille: "Outils",
                    dateInstallation: "2024-02-11",
                    statut: "En maintenance",
                    dateDeploiement: "2024-02-21",
                    versions: [
                        {
                            version: "2.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 170
                },
                {
                    name: "pop_7",
                    famille: "Applications",
                    dateInstallation: "2024-02-13",
                    statut: "Actif",
                    dateDeploiement: "2024-02-23",
                    versions: [
                        {
                            version: "2.2",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 185
                },
                {
                    name: "pop_8",
                    famille: "Backend",
                    dateInstallation: "2024-02-15",
                    statut: "En maintenance",
                    dateDeploiement: "2024-02-25",
                    versions: [
                        {
                            version: "1.3",
                            clients: [
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" }
                            ]
                        }
                    ],
                    value: 165
                }
            ]
        }
        ,

        GRU: {
            applications: [
                {
                    name: "gru_1",
                    famille: "Applications",
                    dateInstallation: "2024-01-01",
                    statut: "Actif",
                    dateDeploiement: "2024-01-10",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        },
                        {
                            version: "1.2",
                            clients: [
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" }
                            ]
                        }
                    ],
                    value: 80
                },
                {
                    name: "gru_2",
                    famille: "Applications",
                    dateInstallation: "2024-01-02",
                    statut: "Actif",
                    dateDeploiement: "2024-01-12",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 130
                },
                {
                    name: "gru_3",
                    famille: "Applications",
                    dateInstallation: "2024-01-03",
                    statut: "Inactif",
                    dateDeploiement: "2024-01-14",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" }
                            ]
                        }
                    ],
                    value: 95
                },
                {
                    name: "gru_4",
                    famille: "Applications",
                    dateInstallation: "2024-01-04",
                    statut: "Actif",
                    dateDeploiement: "2024-01-16",
                    versions: [
                        {
                            version: "1.1",
                            clients: [
                                { name: "Paris", uuid: "A7K", nameUrl: "paris" },
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" }
                            ]
                        }
                    ],
                    value: 110
                },
                {
                    name: "gru_5",
                    famille: "Backend",
                    dateInstallation: "2024-01-05",
                    statut: "Actif",
                    dateDeploiement: "2024-01-18",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Lyon", uuid: "7K9", nameUrl: "lyon" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 105
                },
                {
                    name: "gru_6",
                    famille: "Backend",
                    dateInstallation: "2024-01-06",
                    statut: "Inactif",
                    dateDeploiement: "2024-01-20",
                    versions: [
                        {
                            version: "1.3",
                            clients: [
                                { name: "Marseille", uuid: "X2P", nameUrl: "marseille" },
                                { name: "Bordeaux", uuid: "B0D", nameUrl: "bordeaux" }
                            ]
                        }
                    ],
                    value: 125
                },
                {
                    name: "gru_7",
                    famille: "Backend",
                    dateInstallation: "2024-01-07",
                    statut: "Actif",
                    dateDeploiement: "2024-01-22",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" },
                                { name: "Nantes", uuid: "N1T", nameUrl: "nantes" }
                            ]
                        }
                    ],
                    value: 100
                },
                {
                    name: "gru_8",
                    famille: "Outils",
                    dateInstallation: "2024-01-08",
                    statut: "Actif",
                    dateDeploiement: "2024-01-24",
                    versions: [
                        {
                            version: "2.0",
                            clients: [
                                { name: "Nice", uuid: "9Z1", nameUrl: "nice" },
                                { name: "Lille", uuid: "L1L", nameUrl: "lille" }
                            ]
                        }
                    ],
                    value: 115
                },
                {
                    name: "gru_9",
                    famille: "Outils",
                    dateInstallation: "2024-01-09",
                    statut: "Actif",
                    dateDeploiement: "2024-01-26",
                    versions: [
                        {
                            version: "1.0",
                            clients: [
                                { name: "Strasbourg", uuid: "S7B", nameUrl: "strasbourg" },
                                { name: "Rennes", uuid: "R3N", nameUrl: "rennes" }
                            ]
                        }
                    ],
                    value: 125
                }
            ]
        }
        ,

        DOM: {
            applications: [
                {
                    name: "dom_1",
                    famille: "Applications",
                    dateInstallation: "2024-01-01",
                    statut: "Actif",
                    dateDeploiement: "2024-01-10",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Paris", uuid: "A7K", nameUrl: "paris" }]
                        }
                    ],
                    value: 170
                },
                {
                    name: "dom_2",
                    famille: "Applications",
                    dateInstallation: "2024-01-02",
                    statut: "Actif",
                    dateDeploiement: "2024-01-12",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Lyon", uuid: "7K9", nameUrl: "lyon" }]
                        },
                        {
                            version: "1.1",
                            clients: [{ name: "Marseille", uuid: "X2P", nameUrl: "marseille" }]
                        }
                    ],
                    value: 140
                },
                {
                    name: "dom_3",
                    famille: "Applications",
                    dateInstallation: "2024-01-03",
                    statut: "Inactif",
                    dateDeploiement: "2024-01-14",
                    versions: [
                        {
                            version: "1.2",
                            clients: [{ name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" }]
                        }
                    ],
                    value: 190
                },
                {
                    name: "dom_4",
                    famille: "Applications",
                    dateInstallation: "2024-01-04",
                    statut: "Actif",
                    dateDeploiement: "2024-01-16",
                    versions: [
                        {
                            version: "2.0",
                            clients: [{ name: "Nice", uuid: "9Z1", nameUrl: "nice" }]
                        }
                    ],
                    value: 125
                },
                {
                    name: "dom_5",
                    famille: "Backend",
                    dateInstallation: "2024-01-05",
                    statut: "Actif",
                    dateDeploiement: "2024-01-18",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Paris", uuid: "A7K", nameUrl: "paris" }]
                        }
                    ],
                    value: 150
                },
                {
                    name: "dom_6",
                    famille: "Backend",
                    dateInstallation: "2024-01-06",
                    statut: "Inactif",
                    dateDeploiement: "2024-01-20",
                    versions: [
                        {
                            version: "1.1",
                            clients: [{ name: "Lyon", uuid: "7K9", nameUrl: "lyon" }]
                        }
                    ],
                    value: 175
                },
                {
                    name: "dom_7",
                    famille: "Backend",
                    dateInstallation: "2024-01-07",
                    statut: "Actif",
                    dateDeploiement: "2024-01-22",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Marseille", uuid: "X2P", nameUrl: "marseille" }]
                        }
                    ],
                    value: 160
                },
                {
                    name: "dom_8",
                    famille: "Backend",
                    dateInstallation: "2024-01-08",
                    statut: "Actif",
                    dateDeploiement: "2024-01-24",
                    versions: [
                        {
                            version: "2.1",
                            clients: [{ name: "Toulouse", uuid: "D3Q", nameUrl: "toulouse" }]
                        }
                    ],
                    value: 185
                },
                {
                    name: "dom_9",
                    famille: "Outils",
                    dateInstallation: "2024-01-09",
                    statut: "Actif",
                    dateDeploiement: "2024-01-26",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Nice", uuid: "9Z1", nameUrl: "nice" }]
                        }
                    ],
                    value: 130
                },
                {
                    name: "dom_10",
                    famille: "Outils",
                    dateInstallation: "2024-01-10",
                    statut: "Actif",
                    dateDeploiement: "2024-01-28",
                    versions: [
                        {
                            version: "1.3",
                            clients: [{ name: "Paris", uuid: "A7K", nameUrl: "paris" }]
                        }
                    ],
                    value: 155
                },
                {
                    name: "dom_11",
                    famille: "Outils",
                    dateInstallation: "2024-01-11",
                    statut: "Inactif",
                    dateDeploiement: "2024-01-30",
                    versions: [
                        {
                            version: "2.0",
                            clients: [{ name: "Lyon", uuid: "7K9", nameUrl: "lyon" }]
                        }
                    ],
                    value: 165
                },
                {
                    name: "dom_12",
                    famille: "Outils",
                    dateInstallation: "2024-01-12",
                    statut: "Actif",
                    dateDeploiement: "2024-02-01",
                    versions: [
                        {
                            version: "1.0",
                            clients: [{ name: "Marseille", uuid: "X2P", nameUrl: "marseille" }]
                        }
                    ],
                    value: 145
                }
            ]
        }
    }

    function extract_uuid_name() {
        const set = new Set();
        const resultats = [];
        const applications = fullData[gammeStore.currentGamme].applications;

        for (const app of applications) {
            for (const version of app.versions) {
                for (const client of version.clients) {
                    const key = `${client.name}-${client.uuid}`;
                    if (!set.has(key)) {
                        set.add(key);
                        resultats.push({ name: client.name, uuid: client.uuid });
                    }
                }
            }
        }


        return resultats;
    }

    function findClientNameByUuid(uuid) {
        for (const gamme of Object.values(fullData)) {
            for (const app of gamme.applications) {
                for (const version of app.versions) {
                    for (const client of version.clients) {
                        if (client.uuid.toLowerCase() === uuid.toLowerCase()) {
                            return client.name;
                        }
                    }
                }
            }
        }
        return null;
    }

    function getDataApp(name) {
        const gammeData = fullData[gammeStore.currentGamme];
        if (!gammeData || !gammeData.applications) {
            console.warn(`Aucune donnée trouvée pour la gamme "${gammeStore.currentGamme}"`);
            return null;
        }

        const app = gammeData.applications.find(app => app.name === name);
        if (!app) {
            console.warn(`Application "${name}" non trouvée dans la gamme "${gammeStore.currentGamme}"`);
            return null;
        }

        return app;
    }

    function getApplicationsByFamily(appList) {
        const result = {
            Applications: [],
            Backend: [],
            Outils: []
        };

        for (const app of appList) {
            const famille = app.famille || "Inconnue";
            if (!result[famille]) {
                result[famille] = [];
            }
            result[famille].push(app);
        }

        return result;
    }

    function getApplicationsByClient(clientIdentifier) {
        const result = [];
        if (!gammeStore.currentGamme || !fullData[gammeStore.currentGamme]) {
            console.warn('gammeStore.currentGamme non défini ou données manquantes');
            return [];
        }

        const applications = fullData[gammeStore.currentGamme].applications;

        for (const app of applications) {
            for (const version of app.versions) {
                for (const client of version.clients) {
                    if (
                        client.name.toLowerCase() === clientIdentifier.toLowerCase() ||
                        client.uuid.toLowerCase() === clientIdentifier.toLowerCase()
                    ) {
                        result.push({
                            name: app.name,
                            famille: app.famille,
                            installation: app.dateInstallation,
                            statut: app.statut,
                            deploiement: app.dateDeploiement,
                            value: app.value,
                            version: version.version,
                            client: {
                                name: client.name,
                                uuid: client.uuid,
                                nameUrl: client.nameUrl
                            }
                        });
                    }
                }
            }
        }


        return result;
    }

    return { fullData, extract_uuid_name, findClientNameByUuid, getDataApp, getApplicationsByClient, getApplicationsByFamily }
}