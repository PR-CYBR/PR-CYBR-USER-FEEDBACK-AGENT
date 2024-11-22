from setuptools import setup, find_packages

setup(
    name='PR_CYBR_USER_FEEDBACK_AGENT',
    version='0.1.0',
    packages=find_packages(where='src'),
    package_dir={'': 'src'},
    install_requires=[
        # Add dependencies from requirements.txt
    ],
    author='PR-CYBR',
    author_email='support@pr-cybr.com',
    description='PR-CYBR-USER-FEEDBACK-AGENT',
    url='https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT',
)
