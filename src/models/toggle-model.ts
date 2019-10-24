export interface Toggle {
    id: number;
    name: string;
    enabled: boolean;
    workspace_id: number;
    dependsOn: number[];
}

const toggles: Toggle[] = [
    { id: 1, name: "Feature A", enabled: true, workspace_id: 1, dependsOn: [] },
    { id: 2, name: "Feature B depends A", enabled: false, workspace_id: 1, dependsOn: [1] },
    { id: 3, name: "Feature C", enabled: false, workspace_id: 1, dependsOn: [] },
    { id: 4, name: "Feature D", enabled: true, workspace_id: 2, dependsOn: [] },
    { id: 5, name: "Feature E", enabled: false, workspace_id: 2, dependsOn: [] },
  ];

const list = (): Toggle[] =>  toggles;

export { list };