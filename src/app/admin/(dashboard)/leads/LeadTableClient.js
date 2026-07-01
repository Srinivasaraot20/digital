"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ChevronRight, X } from "lucide-react";

export default function LeadTableClient({ initialLeads }) {
  const [leads, setLeads] = useState(initialLeads || []);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (lead) => {
    setSelectedLead(lead);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center space-x-3 w-full max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search name, email, or company..."
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Budget</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-slate-500">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-slate-50 transition-colors cursor-pointer group"
                    onClick={() => openDrawer(lead)}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{lead.fullName}</div>
                      {lead.company && <div className="text-xs text-slate-500 mt-1">{lead.company}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-600">{lead.email}</div>
                      <div className="text-xs text-slate-500 mt-1">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {lead.service || 'General Inquiry'}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {lead.budget || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        className="text-slate-400 hover:text-primary p-1 rounded transition-colors"
                        onClick={(e) => { e.stopPropagation(); openDrawer(lead); }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <div>Showing 1 to {leads.length} of {leads.length} results</div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={closeDrawer} />
          
          <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-slate-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Lead Details</h2>
              <button 
                onClick={closeDrawer}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Drawer Body */}
            {selectedLead && (
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{selectedLead.fullName}</h3>
                    {selectedLead.company && <p className="text-slate-500 font-medium mt-1">{selectedLead.company}</p>}
                  </div>
                  <select 
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border-0 ring-1 ring-inset ${
                      selectedLead.status === 'New' ? 'bg-blue-50 text-blue-800 ring-blue-200' : 
                      selectedLead.status === 'Contacted' ? 'bg-yellow-50 text-yellow-800 ring-yellow-200' :
                      selectedLead.status === 'Completed' ? 'bg-green-50 text-green-800 ring-green-200' :
                      'bg-slate-50 text-slate-800 ring-slate-200'
                    } focus:ring-2 focus:ring-primary outline-none cursor-pointer`}
                    defaultValue={selectedLead.status}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm text-slate-800 font-medium">{selectedLead.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm text-slate-800 font-medium">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-sm text-slate-800">{selectedLead.whatsapp || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Website</p>
                    <a href={selectedLead.website} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">{selectedLead.website || '-'}</a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Service Interested</p>
                    <p className="text-sm text-slate-800">{selectedLead.service || 'General'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Budget</p>
                    <p className="text-sm text-slate-800">{selectedLead.budget || '-'}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Message / Notes</p>
                  <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 whitespace-pre-wrap border border-slate-100">
                    {selectedLead.message || 'No message provided.'}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Source Page</p>
                    <p className="text-sm text-slate-600">{selectedLead.sourcePage || 'Direct'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Submitted On</p>
                    <p className="text-sm text-slate-600">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end space-x-3">
              <button className="px-4 py-2 border border-red-200 text-red-600 bg-white hover:bg-red-50 font-medium text-sm rounded-lg transition-colors">
                Delete
              </button>
              <button className="px-4 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-orange-600 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
