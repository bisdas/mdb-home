export default {
    branches: [{ name: 'master' }, { name: 'dev', prerelease: 'beta' }],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    { scope: 'major', release: 'major' },
                    { type: 'feat', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'revert', release: 'patch' },
                    { type: 'build', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                    { scope: 'no-release', release: false },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                // eslint-disable-next-line no-template-curly-in-string
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
    ci: true,
};
