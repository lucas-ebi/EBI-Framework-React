import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EbiHeader from '../../../components/EbiHeader/EbiHeader'; // Assuming EbiHeader is a valid React component

const DataPage = () => {
    return (
        <div id="content">
            <EbiHeader title="New Submission" />
            <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
                <h2 className="padding-top-xlarge">New data submission</h2>

                <Tabs>
                    <TabList>
                        <Tab>Samples</Tab>
                        <Tab>Data</Tab>
                        <Tab>Protocols</Tab>
                    </TabList>

                    <TabPanel>
                        <table className="hover">
                            <thead className="fixed">
                                <tr>
                                    <th>Sample ID</th>
                                    <th>Sample Name</th>
                                    <th>Organ</th>
                                    <th>Body Part</th>
                                    <th>Cell Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DA001011MN</td>
                                    <td>A-DA001011MN</td>
                                    <td>Pancreas</td>
                                    <td>...</td>
                                    <td>PBMC</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001012MN</td>
                                    <td>A-DA001012MN</td>
                                    <td>Pancreas - C</td>
                                    <td>...</td>
                                    <td>PBMC</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001013MN</td>
                                    <td>A-DA001013MN</td>
                                    <td>Pancreas - D</td>
                                    <td>...</td>
                                    <td>PBMC</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                            </tbody>        
                        </table>
                    </TabPanel>

                    <TabPanel>
                        <table className="hover">
                            <thead className="fixed">
                                <tr>
                                    <th>Sample ID</th>
                                    <th>File</th>
                                    <th>Date</th>
                                    <th>Size</th>
                                    <th>Experiment Library</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DA001011MN</td>
                                    <td>D1001011MN.fastq</td>
                                    <td>11-Oct-17</td>
                                    <td>180 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001012MN</td>
                                    <td>D1001012MN.fastq</td>
                                    <td>11-Oct-17</td>
                                    <td>150 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001013MN</td>
                                    <td>D1001013MN.fastq</td>
                                    <td>11-Oct-17</td>
                                    <td>120 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>

                    <TabPanel>
                        <table className="hover">
                            <thead className="fixed">
                                <tr>
                                    <th>Sample ID</th>
                                    <th>Dissociation</th>
                                    <th>Conservation</th>
                                    <th>Sequencing</th>
                                    <th>Normalisation</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DA001011MN</td>
                                    <td>Select Protocol <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>Time Measures <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>180 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001012MN</td>
                                    <td>MXX Dissociation <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>Time Measures <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>150 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                                <tr>
                                    <td>DA001013MN</td>
                                    <td>Select Protocol <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>Time Measures <i className="icon icon-functional float-right" data-icon="8"></i></td>
                                    <td>120 MB</td>
                                    <td>10x LLumina</td>
                                    <td className="text-center"><i className="icon icon-functional" data-icon="8"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
}

export default DataPage;