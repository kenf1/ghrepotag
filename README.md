## ghrepotag

[![GitHub Tag](https://img.shields.io/github/v/tag/kenf1/ghrepotag)](https://github.com/kenf1/ghrepotag/tags)

GitHub action to get a repo's latest release tag commit SHA. Combine with actions cache to monitor/run other actions.

### Example

Print latest commit SHA

```
- id: run_action
    uses: kenf1/ghrepotag@v0.1.1
    with:
        org: "neovim"
        repo: "neovim"

- name: Print latest-sha output
    run: echo "Latest SHA is ${{ steps.run_action.outputs.latest-sha }}"
```

Set cache

```
- name: Add string to cache
    id: cache-key
    run: echo "cache-value" > cache_file.txt
```

Retrieve cache

```
- name: Restore cached string
    id: cache-id
    uses: actions/cache@v4
    with:
        path: cache_file.txt
        key: cache-key
```
