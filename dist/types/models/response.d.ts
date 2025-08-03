interface Commit {
    sha: string;
    url: string;
}
export interface SingleTag {
    name: string;
    zipball_url: string;
    tarball_url: string;
    commit: Commit;
    node_id: string;
}
export type AllTags = SingleTag[];
export {};
