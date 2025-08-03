## ghrepotag

Get commit SHA for a GitHub repo's latest release tag.

### Example

```
- id: run_action
    uses: kenf1/ghrepotag@v0.1.1
    with:
        org: "neovim"
        repo: "neovim"

- name: Print latest-sha output
    run: echo "Latest SHA is ${{ steps.run_action.outputs.latest-sha }}"
```
