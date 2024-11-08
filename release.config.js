export default {
    branches: [
        { name: '*' },
    ],
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
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        {
                            type: 'feat',
                            section: ':sparkles: New Features',
                            hidden: false,
                        },
                        {
                            type: 'fix',
                            section: ':bug: Bug Fixes',
                            hidden: false,
                        },
                        {
                            type: 'docs',
                            section: ':memo: Documentation',
                            hidden: false,
                        },
                        {
                            type: 'refactor',
                            section: ':zap: Refactor',
                            hidden: false,
                        },
                        {
                            type: 'perf',
                            section: ':fast_forward: Performance',
                            hidden: false,
                        },
                        {
                            type: 'test',
                            section: ':white_check_mark: Tests',
                            hidden: false,
                        },
                        {
                            type: 'ci',
                            section: ':repeat: CI',
                            hidden: false,
                        },
                        {
                            type: 'chore',
                            section: ':package: Maintenance',
                            hidden: false,
                        },
                    ],
                },
                writerOpts: {
                    /**
                     * Sort commit groups based on predefined section titles.
                     * @param groupA - The first commit group to compare.
                     * @param groupB - The second commit group to compare.
                     * @returns - The comparison result.
                     */
                    commitGroupsSort: (groupA, groupB) => {
                        const sectionTitles = [
                            ':sparkles: New Features',
                            ':bug: Bug Fixes',
                            ':fast_forward: Performance',
                            ':package: Maintenance',
                        ];
                        return sectionTitles.indexOf(groupA.title) - sectionTitles.indexOf(groupB.title);
                    },
                },
            },
        ],
        '@semantic-release/changelog',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                // eslint-disable-next-line no-template-curly-in-string
                message: 'chore(release): [skip ci] ${nextRelease.version}\n\n${nextRelease.notes}',
            },
        ],
    ],
    ci: true,
};
