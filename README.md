This is a test case for a simple Wasm/JavaScript use case described
[here](https://docs.google.com/document/d/1zi5LLKwWMRdIIWN4Vgyy7RgcM0f4Xi3Ffn27QO1iMGU/edit?ts=5da9d0c6#heading=h.ouixklef0pmo).

# Building

Just run `make all` to build the files into the `dist/` directory. You need to
have the `wat2wasm` CLI tool installed for this step to succeed.

# Testing

Start a webserver in the `dist/` directory, for example the integrated Python
HTTP server via `python3 -m http.server --directory dist 8000` and then point
your browser to `http://localhost:8000`.
